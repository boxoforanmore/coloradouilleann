import * as React from "react";
import EventItem from "./event-item";
import { graphql, useStaticQuery } from "gatsby";

const PastEvents = () => {

    const events = useStaticQuery(graphql`
        query {
            allMdx(filter:
            {frontmatter: {status: {eq: "past"}}},
            sort: {frontmatter: {date: DESC}}) {
                nodes {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        location
                    }
                    body
                }   
            }
        }
    `)

    return (
        <div>
            <h2>Past Events</h2>
            {events.allMdx.nodes.map(event => (
                <EventItem
                    key={event.id}
                    title={event.frontmatter.title}
                    date={event.frontmatter.date}
                    location={event.frontmatter.location}
                    body={event.body}
                />
            ))}
        </div>
    )
}

// export const query = graphql`
//     query {
//         allMdx(filter:
//         {frontmatter: {status: {eq: "past"}}},
//         sort: {frontmatter: {date: DESC}}) {
//             nodes {
//                 frontmatter {
//                     title
//                     date(formatString: "MMMM DD, YYYY")
//                     location
//                     }
//                     body
//                 }        
//             }
//         }
//     }
// `;

export default PastEvents