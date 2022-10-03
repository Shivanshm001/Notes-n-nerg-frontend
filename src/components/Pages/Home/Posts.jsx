import React, { useState,useEffect } from 'react';
import Card from './Card';
import axios from 'axios';


export default function Posts() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
       async function getAllPostsFromServer(){
        const {data} = await axios.get("https://notes-n-berg.onrender.com/posts");
        setPosts(data);
       }
       getAllPostsFromServer();
    },[])
    return (
        <>
           {
                posts.map(postData => {
                    return (
                        <Card
                            key={postData.content.rand_name_key}
                            id={postData.content.rand_name_key}
                            title={postData.title}
                            des={postData.des}
                            sem={postData.tags.sem}
                            type={postData.tags.type}
                            createdAt={postData.createdAt}
                            link={postData.content.url}
                        />
                    )
                })
            }
        </>
    )
}
