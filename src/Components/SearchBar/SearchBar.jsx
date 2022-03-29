import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiSocialGithubCircular } from "react-icons/ti";
import { UserData } from "../../context/userDataContext";
import SearchRepo from "./SearchRepo/SearchRepo";
import SearchUser from "./SearchUser/SearchUser";
import { useDelayRepoUnmount } from "./DelayUnmount";

const SearchBar = () => {
  const { isMounted, setIsMounted, showUserSearch, setShowUserSearch } =
    useContext(UserData);
  const showRepoSearch = useDelayRepoUnmount(isMounted, 2000);

  return (
    <div className="searchbar">
      <>
        {!showRepoSearch && !showUserSearch && (
          <>
            <TiSocialGithubCircular
              className="searchbar__userSearch"
              onClick={() => setShowUserSearch(!showUserSearch)}
            />
            <BiSearchAlt
              className="searchbar__repoSearch"
              onClick={() => setIsMounted(!isMounted)}
            />
          </>
        )}
      </>
      <>{showRepoSearch && <SearchRepo />}</>
      <>
        {showUserSearch && (
          <SearchUser
            showUserSearch={showUserSearch}
            setShowUserSearch={setShowUserSearch}
          />
        )}
      </>
    </div>
  );
};

export default SearchBar;
