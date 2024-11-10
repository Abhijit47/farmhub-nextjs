

import HomeThree from '@/components/homes/home-3'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: 'FarmHub Home Three - Agriculture Farming Next js Template',
  description: 'Introducing Farmhub - the ultimate Next template for showcasing your agricultural or organic business. Designed with a sleek and modern aesthetic, Farmhub effortlessly captures the essence of sustainable farming and food production.',
};

export default function index() {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}