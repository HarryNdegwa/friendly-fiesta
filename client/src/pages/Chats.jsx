import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { data } from "../chatData";
import ChatProfileCard from "../components/ChatProfileCard";
import MessageCard from "../components/MessageCard";
import { useDispatch } from "react-redux";
import { getChatUsers, getNewChatUsers } from "../redux/reducers/api/auth";
import InputDropDown from "../components/InputDropDown";

export default function Chats() {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();
  const [newChatUsers, setNewChatUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chatUsers, setChatUsers] = useState([]);

  useEffect(() => {
    const socket = io(`http://${window.location.hostname}:3000`);
    setSocket(socket);

    return () => socket.close();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response1 = await dispatch(getNewChatUsers());
      if (response1 instanceof Array) {
        setNewChatUsers([...response1]);
      }

      const response2 = await dispatch(getChatUsers());

      if (response2 instanceof Array) {
        setChatUsers([...response2]);
      }

      setLoading(false);
    };

    getData();
  }, [dispatch]);

  const handleChange = () => {};

  return (
    <div className="container">
      {/* <h2>No messages yet</h2> */}
      <div>
        <div className="chats-top d-flex justify-content-between mt-3">
          <h3>Chats</h3>
          <div>
            <div>
              <div>
                <InputDropDown data={newChatUsers} setData={setNewChatUsers} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row m-0">
          <div className="col-lg-4">
            <div className="chat-profile-top-left height40px">
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required
                  values={""}
                  onChange={handleChange}
                  name="username"
                  placeholder="Search user..."
                />
              </div>
            </div>
            <div className="chats-profile-wrapper">
              {chatUsers &&
                chatUsers.map((info) => (
                  <ChatProfileCard data={info} key={info.id} />
                ))}
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="chat-profile-top-right height40px">
              <p className="m-0">John Doe</p>
            </div>
            <div className="p-2 messages-wrapper">
              {data.map((chat) => (
                <MessageCard key={chat.id} data={chat} />
              ))}
            </div>
            <div>
              <div className="mb-3 row m-0 align-items-center">
                <div className="col-11">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
                <div className="col-1">
                  <button className="btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
