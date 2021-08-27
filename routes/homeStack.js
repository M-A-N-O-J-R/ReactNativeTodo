import React,{useState} from 'react';
import { createStackNavigator  } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home.js';
import About from '../screens/about.js';

const HomestackNavigator = createStackNavigator(
    {
        Home:Home,
        About:About,
    }
);

const HomeStack = createAppContainer(HomestackNavigator);

export default HomeStack;


