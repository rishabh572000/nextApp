import { NamedTupleMember } from "typescript";
import men from '../../assest/men.jpg';
import women from '../../assest/women.jpg';
import chield from '../../assest/chield.jpg';
import Image from 'next/image'
import React from "react";

interface category {
    _id:Number,
    name:String,
    child?:{
        _id?:Number,
        categor?:String,
        image?:String,
        child?:String[]
    }[]
}


export const category:category[] = [
   {
    _id:1,
    name:'Home',
    child:[]
   },
   {
    _id:2,
    name:'Shop',
    child:[{
        _id: 1,
        categor:'Women & Men',
        image: '/../../assest/men.jpg',
        child:['Men Jecket', 'Snaker Shose', 'Women Dresses', 'Handbags', 'T-Shirt']
    },
    {
        _id: 2,
        categor:'Fashions',
        image:'',
        child:['Clothing, Shoes & Jewelary', 'Offices & Stationery', 'Pet Supplies', 'Toy, Kids & Baby']
    },
    {
        _id: 3,
        categor:'Kid & Baby',
        image:'',
        child:['Vacation Rentants', 'Restaurants', 'Travel Trekking', 'Destinations']
    },
    {
        _id: 4,
        categor:'Leather Shoes',
        image:'',
        child:['Automotive', 'Industrial & Scientific', 'Shoes & Sandal', 'Lifestyle', 'Sound']
    },
    ]
    },
    {
     _id:3,
     name:'Feature',
     child:[]
    },
    {
     _id:4,
     name:'Blogs',
     child:[]
    },
    {
     _id:5,
     name:'Contact',
     child:[]
    },
]