"use client"
import Hero from "@/components/Hero";
import Range from "../components/Range";
import Product from "@/components/Product";
import Slider from "@/components/Slider";
import Furniture from "@/components/Furniture";



export default function Home() {

  return (
    <main>
      <Hero/>
      <Range/>
      <Product/>
      <Slider/>
      <Furniture/>
    </main>
  );
}
