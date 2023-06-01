import React, { useState } from 'react'
import './NavigationBar.scss'
import {motion} from 'framer-motion'
import { Typography } from '@/elements/Typography/Typography.styled'

const variants={
  open: { display:'block',opacity: 1, y: 0 ,z:1},
  closed: { display:'none',opacity: 0, y: "-100%",z:-1},
}

interface routesInteface {
  name:string,
  id:string
}

const routes=[
  {
    id:"about",
    name:"About Me"
  },
  {
    id:"projects",
    name:"Projects"
  },
  {
    id:"contact",
    name:"Contact Me"
  },
]

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const redirectionHandler=(id:string)=>{
      console.log(id);
  }

  return (
    <div className='navigation-bar'>
      <motion.div className='navigation-card d-flex justify-content-center align-item-center cursor-pointer'
        // animate={isOpen?{boxShadow:"0 2px 4px 0 black",z:2}:{shadow:"none"}}
        onClick={()=>setIsOpen(!isOpen)}
      >
        <Typography font="Nunito Sans" 
          sizeDesktop="18"
          sizeMobile="16"
          weightDesktop="400"
          weightMobile="400"
          color="white"
          className="mb-0">
            Menu
          </Typography>
          <motion.div  transition={{ type: "tween", velocity: 50 }} animate={isOpen?{rotateZ:180,scale:[1,2,1],y:"-10px"}:{rotateZ:0,scale:[1,2,1]}}>
          <i className="bi bi-caret-down-fill mx-2"></i>
          </motion.div>
          
      </motion.div>
      <motion.div 
      className='navigation-list'
      transition={{ type: 'tween', stiffness: 100 }}
      variants={variants} animate={isOpen?"open":"closed"}>
        {
          routes.map((route:routesInteface)=>{
              return <div className='d-flex justify-content-center' key={route.id}>
                  <Typography
                    font='Nunito Sans'
                    sizeDesktop='16'
                    sizeMobile='16'
                    weightDesktop='400'
                    weightMobile='400'
                    color='white'
                    className='mb-3'
                    onClick={()=>redirectionHandler(route.id)}
                    >{route.name}</Typography>
              </div>
          })
        }
      </motion.div>
    </div>
  )
}

export default NavigationBar