import React from "react";
import { topics } from "./data";
import Topic from "./Topic";

function TopicList(){
    const topicItem = topics.map(topic =>(
        <Topic name={topic.name} isCompleted={topic.isCompleted} key={topic.id}/>
    ));

    return(
        <section>
            <h1>List of Topics</h1>
            <ul>
                {topicItem}
            </ul>
        </section>
    )
}

export default TopicList;