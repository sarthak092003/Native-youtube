import { FlatList, StyleSheet, View } from "react-native";
import VideoShowcase from "../components/VideoShowcase";
import HeaderTitle from "../components/HeaderTittle";
import colors from "../constants/colors";

const VideoPage = () => {
  const Data = [
    {
      id: 1,
      title: "How to train a dragon lol hehe he",
      description:
        "In this video, we'll show you how to train your cat to perform a variety of tricks using positive reinforcement techniques. You'll be amazed at what your feline friend is capable of learning!",
      url: "https://www.youtube.com/watch?v=abc123",
      thumbnail_url: "https://i.ytimg.com/vi/ljBZ0jjfY14/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjE5sdwfCAM8W5px7GmQxjGQo41w",
      duration: 360,
      view_count: 123456,
      like_count: 789,
      dislike_count: 10,
      published_at: "2022-01-01T00:00:00Z",
      channel: {
        id: 1,
        name: "Funny Cat",
        url: "https://www.youtube.com/channel/UC123",
        thumbnail_url:
          "https://yt3.ggpht.com/-abc123/AAAAAAAAAAI/AAAAAAAAAAA/xyz123/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
      },
      tags: ["cat", "tricks", "training", "funny"],
      comments: [
        {
          id: 1,
          author: {
            id: 2,
            name: "Kitty Lover",
            url: "https://www.youtube.com/channel/UC456",
            thumbnail_url:
              "https://yt3.ggpht.com/-abc456/AAAAAAAAAAI/AAAAAAAAAAA/xyz456/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
          },
          published_at: "2022-01-02T12:34:56Z",
          text: "Great video! My cat is already learning how to sit on command. Keep up the good work!",
        },
        {
          id: 2,
          author: {
            id: 3,
            name: "Dog Person",
            url: "https://www.youtube.com/channel/UC789",
            thumbnail_url:
              "https://yt3.ggpht.com/-abc789/AAAAAAAAAAI/AAAAAAAAAAA/xyz789/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
          },
          published_at: "2022-01-03T12:34:56Z",
          text: "Cats are so overrated. Dogs are the best pets hands down.",
        },
      ],
    },
    {
        id: 2,
        title: "good boy is the best boy in this world and I kneel to it",
        description:
          "In this video, we'll show you how to train your cat to perform a variety of tricks using positive reinforcement techniques. You'll be amazed at what your feline friend is capable of learning!",
        url: "https://www.youtube.com/watch?v=abc123",
        thumbnail_url: "https://i.ytimg.com/vi/RyG45U8_50Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtGf6IFaLTFilQks-fMCYZpKuLHg",
        duration: 360,
        view_count: 123456,
        like_count: 789,
        dislike_count: 10,
        published_at: "2022-01-01T00:00:00Z",
        channel: {
          id: 1,
          name: "Funny Cat Videos",
          url: "https://www.youtube.com/channel/UC123",
          thumbnail_url:
            "https://yt3.ggpht.com/-abc123/AAAAAAAAAAI/AAAAAAAAAAA/xyz123/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
        },
        tags: ["cat", "tricks", "training", "funny"],
        comments: [
          {
            id: 1,
            author: {
              id: 2,
              name: "Kitty Lover",
              url: "https://www.youtube.com/channel/UC456",
              thumbnail_url:
                "https://yt3.ggpht.com/-abc456/AAAAAAAAAAI/AAAAAAAAAAA/xyz456/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
            },
            published_at: "2022-01-02T12:34:56Z",
            text: "Great video! My cat is already learning how to sit on command. Keep up the good work!",
          },
          {
            id: 2,
            author: {
              id: 3,
              name: "Dog Person",
              url: "https://www.youtube.com/channel/UC789",
              thumbnail_url:
                "https://i.ytimg.com/vi/tOzDk704x98/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAN4nVLvcgzsWtvJ6HLzdBcH2JIXg",
            },
            published_at: "2022-01-03T12:34:56Z",
            text: "Cats are so overrated. Dogs are the best pets hands down.",
          },
        ],
      },
      {
        id: 3,
        title: "How to train a cat to do tricks and also dogs are the worsttt sorry",
        description:
          "In this video, we'll show you how to train your cat to perform a variety of tricks using positive reinforcement techniques. You'll be amazed at what your feline friend is capable of learning!",
        url: "https://www.youtube.com/watch?v=abc123",
        thumbnail_url: "https://i.ytimg.com/vi/tOzDk704x98/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAN4nVLvcgzsWtvJ6HLzdBcH2JIXg",
        duration: 360,
        view_count: 123456,
        like_count: 789,
        dislike_count: 10,
        published_at: "2022-01-01T00:00:00Z",
        channel: {
          id: 1,
          name: "Funny Cat Videos",
          url: "https://www.youtube.com/channel/UC123",
          thumbnail_url:
            "https://yt3.ggpht.com/-abc123/AAAAAAAAAAI/AAAAAAAAAAA/xyz123/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
        },
        tags: ["cat", "tricks", "training", "funny"],
        comments: [
          {
            id: 1,
            author: {
              id: 2,
              name: "Kitty Lover",
              url: "https://www.youtube.com/channel/UC456",
              thumbnail_url:
                "https://yt3.ggpht.com/-abc456/AAAAAAAAAAI/AAAAAAAAAAA/xyz456/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
            },
            published_at: "2022-01-02T12:34:56Z",
            text: "Great video! My cat is already learning how to sit on command. Keep up the good work!",
          },
          {
            id: 2,
            author: {
              id: 3,
              name: "Dog Person",
              url: "https://www.youtube.com/channel/UC789",
              thumbnail_url:
                "https://yt3.ggpht.com/-abc789/AAAAAAAAAAI/AAAAAAAAAAA/xyz789/s100-c-k-c0xffffffff-no-rj-mo/photo.jpg",
            },
            published_at: "2022-01-03T12:34:56Z",
            text: "Cats are so overrated. Dogs are the best pets hands down.",
          },
        ],
      },
  ];

  return (
    <View style = {styles.container}>
      <FlatList data = {Data} keyExtractor = {(item)=>item.id} ListHeaderComponent  ={HeaderTitle} renderItem = {VideoShowcase}/>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        backgroundColor:colors.backgroundcolor
    }
})

export default VideoPage
