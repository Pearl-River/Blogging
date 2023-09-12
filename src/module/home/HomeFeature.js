import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostFeatureItem from "../post/PostFeatureItem";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { withErrorBoundary } from "react-error-boundary";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
        </div>
      </div>
    </HomeFeatureStyles>
  );
};
// Example of error boundary
export default withErrorBoundary(HomeFeature, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">
      Look like this component error
    </p>
  ),
});
