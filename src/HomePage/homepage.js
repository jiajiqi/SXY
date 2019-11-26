import React from 'react';
import {Link} from'react-router-dom';
import {Layout,Row, Col,Input,Carousel,Icon} from 'antd'

var HomePageCss= require('./homepage.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div className={HomePageCss.headline}>
                    <Row type="flex" justify="space-around">
                    <Col span={24}></Col>
                    </Row>
                </div>

                <div className={HomePageCss.firstline}>
                <Row type="flex" justify="space-around">
                    <Col span={3}></Col>
                    <Col span={2}>
                        名称
                    </Col>
                    <Col span={7}>
                    <Input.Search placeholder="搜索"
                     onSearch={value => console.log(value)} style={{ width: 250 }}/>
                    </Col>
                    <Col span={1}>
                        <Link className={HomePageCss.f}>首页</Link>
                        </Col>
                    <Col span={2}>
                        <Link className={HomePageCss.f}>我们的服务</Link>
                    </Col>
                    <Col span={2}>
                        <Link className={HomePageCss.f}>新的动态</Link>
                        </Col>
                    <Col span={2}>
                        <Link className={HomePageCss.f}>联系我们</Link>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                </div>
                <div className={HomePageCss.secondline}>
                    <Row>
                    <Col span={24}>
                    <Carousel autoplay className={HomePageCss.l}>
                        <div>
                           <img src="/taylor.jpg" width={1350} height={380}></img>
                        </div>
                        <div>
                           <img src="/taylor.jpg" width={1350} height={380}></img>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    </Col>
                    </Row>
                </div>
                <div className={HomePageCss.lastline}>
                    <Row>
                    <Col span={2}></Col>
                    <Col span={5}>
                    <div className={HomePageCss.phone}>
                            <Icon type="home" style={{fontSize:'40px'}}/>
                            <p >首页</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomePageCss.phone}>
                            <Icon type="user" style={{fontSize:'40px'}}/>
                            <p >个人主页</p>
                        </div>
                    </Col>
                    <Col span={5}>
                    <div className={HomePageCss.phone}>
                            <Icon type="sketch" style={{fontSize:'40px'}}/>
                            <p >会员中心</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomePageCss.phone}>
                            <Icon type="phone" style={{fontSize:'40px'}}/>
                            <p >在线客服</p>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                    </Row>
                </div>
                <div className={HomePageCss.addline}>
                    <Row>
                    <Col span={24}>附加</Col>
                    </Row>
                </div>
            </div>
        )
    }
}