import React, { useState, useRef } from "react";
import { Overlay, Popover, Image } from "react-bootstrap";
import List from "./list";
import "../../../styles/dashboard/notificationList/index.scss";

export default function NotificationListComponent() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Image
        style={{ marginRight: "20px" }}
        onClick={handleClick}
        className="roundedCircle"
        src="/assets/mockup/Notifications.png"
      />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={10}
        transition={true}
      >
        <Popover id="popover-contained" style={{ minWidth: "32vw" }}>
          <div className="notificationList-container">
            <div className="notificationList-header">
              <span className="hd">
                Notifications <span>2</span>{" "}
              </span>
              <span onClick={() => setShow(false)} className="cross">
                &#10005;
              </span>
            </div>

            <div className="notificationList-body">
              <span className="sub-hd-recent">Recent</span>

              <List />
              <List />

              <span className="list-earlier">Earlier</span>

              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </Popover>
      </Overlay>
    </div>
  );
}
