import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Titik, Vector, Wanita } from "../assets";
import CardBook from "../components/CardBook";
import { Modal, Form, Input, Select, Button, Upload } from "antd";
const { Search } = Input;
const { Option } = Select;
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const HomePage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const navigate = useNavigate();

  const [typeTombol, setTypeTombol] = useState("LOGIN");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [category, setCategory] = useState([]);
  const [author, setAuthor] = useState([]);
  const [book, setBook] = useState([]);

  const [title, setTitle] = useState("");

  const fetchCategory = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/category",
        method: "GET",
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      });

      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBook = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/book",
        method: "GET",
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      });

      setBook(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAuthor = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/author",
        method: "GET",
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      });

      setAuthor(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandle = (type) => {
    if (type == "LOGIN") {
      setTypeTombol("LOGOUT");
      navigate("/login");
    } else {
      navigate("/");
      localStorage.clear();
      setTypeTombol("LOGIN");
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e.slice(0, 1);
    }
    return e && e.fileList.slice(0, 1);
  };

  const handleAddBook = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetchCategory();
    fetchAuthor();
    fetchBook();
  }, [setTypeTombol]);

  return (
    <div className="w-full px-36">
      {/* NAVBAR */}
      <div className="w-full h-[50px] flex justify-between px-10 py-2 bg-slate-300 ">
        <div className="w-[50%] h-full flex items-center">
          <p className="font-semibold">MYBOOK</p>
        </div>
        <div className="w-[50%] h-full flex justify-end gap-2">
          {localStorage.getItem("role") == "ADMIN" ? (
            <Button
              className="px-2 py-1 bg-slate-400 rounded-md font-semibold hover:cursor-pointer hover:bg-slate-500 text-[12px]"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              ADD BOOK
            </Button>
          ) : null}
          {localStorage.getItem("authorization") ? (
            <button
              className="px-2 py-1 bg-slate-400 rounded-md font-semibold hover:cursor-pointer hover:bg-slate-500 text-[12px]"
              onClick={() => {
                loginHandle("LOGOUT");
              }}
            >
              LOGOUT
            </button>
          ) : (
            <button
              className="px-2 py-1 bg-slate-400 rounded-md font-semibold hover:cursor-pointer hover:bg-slate-500 text-[12px]"
              onClick={() => {
                loginHandle("LOGIN");
              }}
            >
              LOGIN
            </button>
          )}
        </div>
      </div>

      {/* SECTION HERO */}
      <div className="w-full flex justify-between  bg-slate-200">
        <div className="w-full h-[240px] flex flex-col justify-center items-center gap-2 ">
          <p className="text-[40px] font-bold leading-10 font-serif">
            READ AND ADD YOUR INSIGHT
          </p>
          <p className="text-[14px]">
            find your favorite book and read it here for free
          </p>

          <Search
            placeholder="search your book"
            onSearch={onSearch}
            style={{
              width: 400,
            }}
          />
        </div>
      </div>

      {/* BOOK */}
      <div className="w-full flex justify-center items-center flex-wrap gap-7 px-3 py-5 bg-slate-100">
        {book?.length == 0 ? (
          book?.map((el) => {
            return <CardBook key={el.id} />;
          })
        ) : (
          <div className="w-full h-[400px] flex justify-center items-center">
            <p className="font-serif font-semibold">Book Empty</p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="w-full h-[50px] bg-slate-300 flex justify-center items-center">
        <p>FOOTER</p>
      </div>

      {/* MODAL ADD BOOK */}
      <Modal
        title="Add Book"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,

          <button
            className="w-[70px] h-[32px] bg-blue-700 rounded-md text-white font-semibold hover:cursor-pointer ml-3 hover:bg-blue-800 text-[12px]"
            onClick={() => {
              loginHandle("LOGIN");
            }}
          >
            Submit
          </button>,
        ]}
      >
        <Form className="grid grid-cols-2 gap-2">
          <Form.Item
            className="col-span-2 flex flex-col"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item
            className="flex flex-col"
            name="publicYear"
            rules={[
              { required: true, message: "Please input the public year!" },
            ]}
          >
            <Input placeholder="Public Year" />
          </Form.Item>

          <Form.Item
            className="flex flex-col"
            name="countPage"
            rules={[
              { required: true, message: "Please input the count page!" },
            ]}
          >
            <Input type="number" min={1} placeholder="Count Page" />
          </Form.Item>

          <Form.Item
            className=" flex flex-col"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Upload beforeUpload={() => false} listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            className="flex flex-col"
            name="rating"
            rules={[{ required: true, message: "Please input the rating!" }]}
          >
            <Input type="number" min={1} max={5} placeholder="Rating" />
          </Form.Item>

          <Form.Item
            className="flex flex-col"
            name="categoryId"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select placeholder="Select a category">
              {category?.map((el) => {
                return (
                  <Option key={el.id} value={el.id}>
                    {el.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            className="flex flex-col"
            name="authorId"
            rules={[{ required: true, message: "Please select an author!" }]}
          >
            <Select placeholder="Select an author">
              {author?.map((el) => {
                return (
                  <Option key={el.id} value={el.id}>
                    {el.displayName}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default HomePage;
