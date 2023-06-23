import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='bg-stone-950 text-white font-mono'>
    <Navbar/>
    <div>
      <img src="https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=1400" alt="asim" />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 mt-10 p-5 '>
      <div>
        <h1 className='font-normal text-2xl '>Pioneering Research on path <br /> to AGI</h1>
        <p className='font-normal text-xl mt-2 cursor-pointer underline hover:no-underline'>Learn about our Research</p>
      </div>
      <div>
        <h1 className='font-normal text-2xl '>Transforming Work and <br /> Creativity with AI</h1>
        <p className='font-normal text-xl mt-2 cursor-pointer underline hover:no-underline'>Explore our Products</p>
      </div>
      <div>
        <h1 className='font-normal text-2xl '>Join us in shaping the future <br /> of technology</h1>
        <p className='font-normal text-xl mt-2 cursor-pointer underline hover:no-underline'>View Careers</p>
      </div>
    </div>
    <div className='border-b-4 border-indigo-500 mt-10 p-5'></div>
    <div className='flex flex-col md:flex-row justify-between p-5'>
      <h1 className='font-normal text-5xl'>Latest Updates</h1>
      <h1 className='font-normal text-2xl mt-2 cursor-pointer underline hover:no-underline'>View all updates</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-4 p-5 mb-10 gap-10'>
      <div>
        <div>
          <img src="https://images.openai.com/blob/55a3909d-ebea-422f-81d4-fbeb74480e8a/function-calling-and-other-api-updates.jpg?trim=0,0,0,0&width=800" alt="asim" />
        </div>
        <h1>Functions Calling and Other API updates</h1>
        <h1>June 13, 2013</h1>
      </div>
      <div>
        <div>
          <img src="https://images.openai.com/blob/992f3298-aa47-47df-9ab0-e75d3aa1d116/openai-cybersecurity-grant-program.png?trim=0,0,0,0&width=800" alt="asim" />
        </div>
        <h1>OpenAI cybersecurity grant program</h1>
        <h1>June 1, 2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/ba3bb73e-6bd4-45ba-845b-b56c750d37aa/democratic-inputs-to-ai.png?width=800" alt="asim" />
          </div>
          <h1>Democratic input to AI</h1>
          <h1>May 25,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/7de8358f-9eab-42e0-96eb-e87d0238c205/governance-of-superintelligence.jpg?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>Governance of SuperIntelligance</h1>
          <h1>May 22,2023</h1>
        </div>
       
      </div>
      <div className='border-b-4 border-indigo-500 mt-10 p-5'></div>
      <div className='flex flex-col md:flex-row justify-between p-5'>
 <h1  className='font-normal text-5xl'>Safety & Responsibility</h1>
 <div>
  <h1  className='font-normal text-2xl'>Our work to create safe and beneficial AI requires a <br /> deep understanding of the potential risks and <br /> benefits, as well as careful consideration of the <br /> impact.</h1>
  <p  className='font-normal text-2xl mt-2 cursor-pointer underline hover:no-underline'>Learn about safety</p>
 </div>
      </div>

      <div className='mt-10'>
        <img src="https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg?trim=0,0,0,0&width=1400" alt="asim" />
      </div>
      <div className='border-b-4 border-indigo-500 mt-10 p-5'></div>
      <div className='flex flex-col md:flex-row justify-between p-5'>
 <h1  className='font-normal text-5xl'>Research</h1>
 <div>
  <h1   className='font-normal text-2xl'>
We research generative models and how to align <br /> them with human values.</h1>
  <p   className='font-normal text-xl mt-2 cursor-pointer underline hover:no-underline'>Learn about our research</p>
 </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 p-5 mb-10 gap-10'>
        <div>
          <div>
            <img src="https://images.openai.com/blob/373bf52a-5373-4d4e-88fe-7fbf738ec6d1/improving-mathematical-reasoning-with-process-supervision.jpg?trim=0,3439,0,144&width=800" alt="asim" />
          </div>
          <h1>Improving Mathematical Reasoning <br /> with process supervision</h1>
          <h1>MAy 31,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/e1afc745-b554-4785-ad0e-8f9c65e1274f/language-models-can-explain-neurons-in-language-models.png?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>Language Model can explain <br /> neurons in language models</h1>
          <h1>May 9,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/b5b6da55-f60d-43b3-a40f-902b9baf57e0/gpts-are-gpts-an-early-look-at-the-labor-market-impact-potential-of-large-language-models.png?width=800" alt="asim" />
          </div>
          <h1>GPT's are GPT's:An early look at the <br /> labor market impact potential of large <br /> language models</h1>
          <h1>May 17,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/243b509f-9d19-438e-a2ce-05e9ea5086a9/gpt-4.png?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>GPT-4</h1>
          <h1>May 14,2023</h1>
        </div>
       
      </div>
      <div className='border-b-4 border-indigo-500 mt-10 p-5'></div>
      <div className='flex flex-col md:flex-row justify-between p-5'>
 <h1 className='font-normal text-5xl'>Products</h1>
 <div>
  <h1   className='font-normal text-2xl '>Our API platform offers our latest models and guides <br /> for safety best practices.</h1>
  <p   className='font-normal text-xl mt-2 cursor-pointer underline hover:no-underline'>Explore our products</p>
 </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 p-5 mb-10 gap-10'>
        <div>
          <div>
            <img src="https://images.openai.com/blob/55a3909d-ebea-422f-81d4-fbeb74480e8a/function-calling-and-other-api-updates.jpg?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>Function calling other API <br /> updates</h1>
          <h1>jan 13,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/2e984e4a-e769-416e-b269-a9e576f532ac/introducing-the-chatgpt-app-for-ios.png?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>Introduction to ChatGPT app for iOS</h1>
          <h1>May 18,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/b78937ac-9ede-459f-80ab-db50f4f4622a/new-ways-to-manage-your-data-in-chatgpt.png?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>New ways to manage yours data in <br /> ChatGPT</h1>
          <h1>April 25,2023</h1>
        </div>
        <div>
          <div>
            <img src="https://images.openai.com/blob/c51f2c96-3595-48ae-9fb6-165563fbb086/chat-plugins.png?trim=0,0,0,0&width=800" alt="asim" />
          </div>
          <h1>ChatGPT plugins</h1>
          <h1>March 23,2023</h1>
        </div>
       
      </div>
<div className='grid grid-cols-1 md:grid-cols-2 p-5 mb-10 gap-10 font-signifier'>
  <div>

   <h1 className='font-normal  text-5xl'>"I encourage my team to <br /> keep learning. Ideas in <br /> different topics or fields <br /> can often inspire new ideas <br /> and broaden the potential <br /> solution space."</h1>
  <p className='mt-5'>Lilian Weng</p>
  <p>Applied AI at OpenAI</p>
  </div>
   <div>
    <img src="https://images.openai.com/blob/734af367-24c1-4043-934c-269a6a3ec47e/stangel-2022-0484.jpg?trim=0,537,40,462&width=1400" alt="" />
   </div>
</div>
    </div>
  )
}

export default Home