import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from "./Card"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <div className='flex justify-evenly min-h-<fraction> rounded-sm font-mono'>
        <div className=''>
    <Card title="Mula-Dam" image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEic6Wdkpqe0wJWuhxe1q9UtGMMa8J56WoReR_4xy2sdD326Sr0ET8pRZfGgsmaCmNCfwXnuGwDf-Q5-YsoOIq5uh7saE7hjRnyMdBnvh7NuK7NFhyPiJis_oSBj79K5GK-eAvD4wf80q8c/s1600/Mula.jpg" />
    </div>
     <div className='justify-center '>
    <Card title="MPKV" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTubWmz_CjddXPboueAK2NECFYn_Ldg8W6w&s"/>
    </div>
    </div>
    <div className='flex justify-evenly min-h-<fraction> rounded-sm font-mono'>
        <div className=''>
    <Card title="ASC-College" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanrm4N7p-W8r34sm1yQX3tOCNkAPlkTaNLg&s" />
    </div>
     <div className='justify-center '>
    <Card title="Shani-Temple" image="https://bhatkantiholidays.com/wp-content/uploads/2020/10/Shani-Shingnapur-4.jpg"/>
    </div>
    </div>
    </>

);