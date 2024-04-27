<script setup>
import { useRoute } from 'vue-router';
import HomeIcon from "/src/shared/icons/HomeIcon.vue";
import LogoIcon from "/src/shared/icons/LogoIcon.vue";
import FavouritesIcon from "/src/shared/icons/FavouritesIcon.vue";
import TrendingIcon from "/src/shared/icons/TrendingIcon.vue";
import CalendarIcon from "/src/shared/icons/CalendarIcon.vue";
import CommunityIcon from "/src/shared/icons/CommunityIcon.vue";
import SocialIcon from "/src/shared/icons/SocialIcon.vue";
import SettingsIcon from "/src/shared/icons/SettingsIcon.vue";
import LogOutIcon from "/src/shared/icons/LogOutIcon.vue";

const isActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};
</script>
<template>
    <div class="sidebar">
      <LogoIcon />
      <NavLink to="home" class="sidebar-links sidebar-home" :class="{ active: isActive('/home') }">
        <div class="sidebar-icon"><HomeIcon /></div>
        Home
      </NavLink>
      <NavLink to="/" class="sidebar-links simple" :class="{ active: isActive('/') }">
        <div class="sidebar-icon"><FavouritesIcon /></div>
        Favourites
      </NavLink>
      <NavLink to="/trending" class="sidebar-links simple" :class="{ active: isActive('/trending') }">
        <div class="sidebar-icon"><TrendingIcon /></div>
        Trending
      </NavLink>
      <NavLink to="/calendar" class="sidebar-links simple" :class="{ active: isActive('/calendar') }">
        <div class="sidebar-icon"><CalendarIcon /></div>
        Coming soon
      </NavLink>
      <router-link to="/" class="sidebar-links community">
        <div class="sidebar-icon"><CommunityIcon /></div>
        Community
      </router-link>
      <router-link to="/" class="sidebar-links social">
        <div class="sidebar-icon"><SocialIcon /></div>
        Social
      </router-link>
      <router-link to="/" class="sidebar-links simple">
        <div class="sidebar-icon"><SettingsIcon /></div>
        Settings
      </router-link>
      <router-link to="/" class="sidebar-links simple">
        <div class="sidebar-icon"><LogOutIcon /></div>
        Logout
      </router-link>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  .sidebar {
    padding: 40px;
    background: #21201E;
    height: 100% !important;
    min-width: 274px;
    box-shadow: 2px 0px 90px rgba(97, 0, 194, 0.4);
  }
  
  .sidebar-icon {
    max-width: 24rem;
    max-height: 24rem;
  }
  
  .sidebar-links {
    display: flex;
    justify-content: start;
    gap: 12rem;
    align-items: center;
    font-weight: 400;
    font-size: 16rem;
    line-height: 150%;
    color: var(--white);
    opacity: 0.8;
  }
  
  .sidebar-home {
    margin-top: 58rem;
    margin-bottom: 35rem;
  }
  
  .simple {
    margin-bottom: 34rem;
  }
  
  .community {
    margin-top: 88rem;
    margin-bottom: 33rem;
  }
  
  .social {
    margin-bottom: 257rem;
  }
  
  .active {
    font-weight: 700;
    font-size: 16rem;
    line-height: 150%;
    color: var(--white);
    opacity: 1;
  }
  </style>
  