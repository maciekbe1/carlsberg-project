import React, { useState, useEffect } from "react";
import slugify from "slugify";
import promotions from './promotions-context.json'

export const GlobalState = React.createContext();

const Store = props => {
    const [news, setNews] = useState();
    // const [promotions, setPromotions] = useState(promotions);
    useEffect(() => {
        fetch("http://carlsberg-qa.bpower2.com/index.php/restApi/common-posts/")
            .then(res => res.json())
            .then(res => {
                const arr = [];
                res.map(item => {
                    switch (item.post.link_id) {
                        case "1":
                            return arr.push({
                                id: item.post.menu_order,
                                title: item.post.post_title,
                                text: item.post.post_content,
                                slug: slugify(item.post.post_title, {
                                    replacement: "-", // replace spaces with replacement
                                    remove: null, // regex to remove characters
                                    lower: true // result in lower case
                                }),
                                img: "carlsberg" + item.post.menu_order + ".jpg"
                            });
                        default:
                            return null;
                    }
                });
                setNews(arr);
            });
    }, []);

    return (
        <GlobalState.Provider value={{ news, promotions }}>
            {props.children}
        </GlobalState.Provider>
    );
};

export default Store;
