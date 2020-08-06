import React from "react";
import "./index.less";
import axios from "../../axios";
export default class Home extends React.Component {
    componentDidMount() {
        axios
            .ajax({
                url: "/open_city.json",
            })
            .then((result) => {
                // eslint-disable-next-line no-console
                console.log("result: ", result);
            });
    }
    render() {
        return <div className="home-wrap">欢迎学习IMooc后台管理系统课程</div>;
    }
}
