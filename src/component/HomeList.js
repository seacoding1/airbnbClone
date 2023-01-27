
import HomeContent from "./HomeContent";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "./HomeList.module.css";

const HomeList = () => {

    const [data, setData] = useState();

    const { category } = useParams();
    console.log(category);



    useEffect(() => {
        fetch("https://raw.githubusercontent.com/devTozi/react-airbnb/master/bnb%EB%8D%B0%EC%9D%B4%ED%84%B0.json")
            .then(res => res.json())
            .then(data => { setData(data); });
    }, [])


    const src = "https://firebasestorage.googleapis.com/v0/b/deploytest-3f355.appspot.com/o/";
    const alt = "?alt=media";

    return (
        <Fragment>
            <div className={styled.home_container}>
                {data === undefined ? '로딩중' : category === undefined ?
                    data.map((item, index) =>
                    
                        <div className={styled.home_wrap} key={index}>
                            <img src={src + item.img[0] + alt} />
                            <div className={styled.home_text}>
                                <div className={styled.home_left}>
                                    <strong>{item.address.join('')}</strong>
                                    <div>{item.duration}</div>
                                    <div>₩{item.cost} /박</div>
                                </div>
                                <span>★{item.score}</span>
                            </div>
                            <button className={styled.like}></button>
                        </div>



                    ) : data.filter((item) => item.category === category).map((item, index) =>
                        <div className={styled.home_wrap} key={index}>
                            <img src={src + item.img[0] + alt} />
                            <div className={styled.home_text}>
                                <div className={styled.home_left}>
                                    <div>{item.address.join('')}</div>
                                    <div>{item.duration}</div>
                                    <div>₩{item.cost} /박</div>
                                </div>
                                <span>★{item.score}</span>
                            </div>
                            <button className={styled.like}>♡</button>
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default HomeList;