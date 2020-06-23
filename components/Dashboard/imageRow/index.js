import React, { Component } from "react";
import { Image, Badge } from "react-bootstrap";
import "../../../styles/dashboard/ImageRow/index.scss";

class _Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      showData: 4,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => this.componentFunctionality()
    );
  }

  componentFunctionality = () => {
    if (this.state.width >= 2000) {
      this.setState({
        showData: 6,
      });
    } else if (this.state.width >= 1800) {
      this.setState({
        showData: 5,
      });
    } else if (this.state.width >= 1600) {
      this.setState({
        showData: 4,
      });
    } else if (this.state.width >= 1400) {
      this.setState({
        showData: 3,
      });
    } else if (this.state.width >= 1200) {
      this.setState({
        showData: 2,
      });
    } else {
      this.setState({
        showData: 1,
      });
    }
  };

  render() {
    const { familyMember } = this.props;
    return (
      <div className="image-head">
        {familyMember?.length
          ? familyMember?.map((v, i) => {
            let margin = 0;
            let zIndex = 0;
            if (i < this.state.showData) {
              if (i == 0) {
                margin = 0;
                zIndex = 7;
              } else if (i == 6) {
                margin = -10;
                zIndex = 6;
              } else if (i == 5) {
                margin = -10;
                zIndex = 5;
              } else if (i == 4) {
                margin = -10;
                zIndex = 4;
              } else if (i == 3) {
                margin = -10;
                zIndex = 3;
              } else if (i == 2) {
                margin = -10;
                zIndex = 2;
              } else if (i == 1) {
                margin = -10;
                zIndex = 1;
              }

              return (
                <Image
                  key={i + Math.floor(Math.random() * 10001)}
                  style={{ marginLeft: margin, zIndex: zIndex }}
                  className="roundedCircle"
                  src={v.avatarUrl ? v.avatarUrl : "/assets/mockup/defaultImage.png"}
                  alt={v.fullName}
                />
              );
            }
          })
          : null}
        {this.props.familyMember?.length > this.state.showData ? (
          <Badge className="image-badge">
            +
            {this.props.familyMember?.length > this.state.showData
              ? this.props.familyMember?.length - this.state.showData
              : 0}
          </Badge>
        ) : (
            <></>
          )}
        <div className="member-name">
          {familyMember?.map((v, i, arr) => {
            if (i < this.state.showData) {
              return (
                <span key={i + Math.floor(Math.random() * 10001)}>
                  {arr.length === i + 1 ? `${v.fullName}` : `${v.fullName},`}
                </span>
              );
            }
          })}

          {familyMember?.length > this.state.showData ? (
            ` & ${
            familyMember?.length > this.state.showData
              ? familyMember?.length - this.state.showData
              : 0
            } Others`
          ) : (
              <></>
            )}
        </div>
      </div>
    );
  }
}
export default _Images;
