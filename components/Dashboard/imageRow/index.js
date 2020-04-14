import React, { Component } from 'react';
import { Image, Badge } from 'react-bootstrap';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            showData: 4
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight }, () => this.componentFunctionality());
    }

    componentFunctionality = () => {
        if (this.state.width >= 2000) {
            this.setState({
                showData: 6
            })
        } else if (this.state.width >= 1800) {
            this.setState({
                showData: 5
            })
        } else if (this.state.width >= 1600) {
            this.setState({
                showData: 4
            })
        } else if (this.state.width >= 1400) {
            this.setState({
                showData: 3
            })
        } else if (this.state.width >= 1200) {

            this.setState({
                showData: 2
            })
        } else if (this.state.width >= 1000) {

            this.setState({
                showData: 1
            })
        } else {
            this.setState({
                showData: 0
            })
        }
    }


    render() {
        return (
            <div key={this.props.key} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {this.props.familyMember.map((v, i) => {
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
                            <Image  style={{ marginLeft: margin, zIndex: zIndex }} key={i} className="roundedCircle" src={v.memberImage} />

                        )
                    }
                })
                }
                {
                    this.props.familyMember.length > this.state.showData ?
                        < Badge style={{
                            width: 47.5,
                            height: 47.5,
                            borderRadius: 24,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'SF Pro Display',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#344563',
                            background: '#dadee2',
                            marginLeft: -10
                        }} >
                            +{this.props.familyMember.length > this.state.showData ? this.props.familyMember.length - this.state.showData : 0}
                        </Badge>
                        :
                        <></>
                }
                <div style={{
                    marginLeft: 5,
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#344563'
                }}>
                    {this.props.familyMember.map((v, i, arr) => {
                        if (i < this.state.showData) {
                            return (

                                <>{v.memberName},</>
                            )
                        }
                    })}

                    {this.props.familyMember.length > this.state.showData ? ` & ${this.props.familyMember.length > this.state.showData ? this.props.familyMember.length - this.state.showData : 0} Others` : <></>}
                </div>
            </div >
        )
    }
}
export default Images;
