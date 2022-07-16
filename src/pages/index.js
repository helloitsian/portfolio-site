import * as React from "react"
import AvatarCanvas from "../components/AvatarCanvas/AvatarCanvas";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeNav from "../components/HomeNav/HomeNav";

const IndexPage = () => {
  return (
    <main>
      <HomeHeader/>
      <HomeNav/>
      <AvatarCanvas/>
    </main>
  )
}

export default IndexPage
