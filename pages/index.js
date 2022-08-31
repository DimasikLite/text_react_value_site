import React, { useState } from 'react';
import TitleBanner from '../components/main/TitleBanner';
import OwnServices from '../components/main/OwnServices';

export default function Home() {
  return (
    <div className={'flex flex-col gap-16'}>
		<TitleBanner/>
		<OwnServices/>
		<OwnServices/>
    </div>
  )
}
