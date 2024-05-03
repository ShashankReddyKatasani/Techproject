import React from 'react';
import OrgChart from '../OrgStructure'

function Orgstructurep() {
  return (
    <>
    <div style={{height: '100%', }}>

                 <OrgChart nodes={[
                     { id: 1, name: 'Bindu Madhavi Madiraju ', title: 'President', img: 'https://techprojects.com/wp-content/uploads/2021/09/BIndu-300x300.png' ,disc : 'As a minority & women owned business leader, Bindu Madiraju got more than a decade experience'},
                     { id: 2, pid: 1, name: 'Ram Madiraju', title: 'Partner/COO', img: 'https://techprojects.com/wp-content/uploads/2021/05/Ram-copy-300x300.jpg' },
                     { id: 3, pid: 1, name: 'Chandra Reddy', title: 'Partner', img: 'https://techprojects.com/wp-content/uploads/2022/03/ChandraReddy-300x300.jpg' },
                     { id: 4, pid: 2, name: 'Krishna Alavala', title: 'Vice President -Finance & Sales', img: 'https://techprojects.com/wp-content/uploads/2021/05/Krishna-copy-300x300.jpg' },
                     { id: 5, pid: 2, name: 'Satish Vallabhaneni', title: 'Technical Project Manager & ERP', img: 'https://techprojects.com/wp-content/uploads/2022/05/Satich-300x300.jpg' },
                     { id: 6, pid: 3, name: 'Sarath Makkapati', title: 'Head of Finance & Accounting', img: 'https://techprojects.com/wp-content/uploads/2021/09/Sharath-300x300.jpg' },
                     { id: 7, pid: 3, name: 'Shweta Narang', title: 'Director of Operations', img: 'https://techprojects.com/wp-content/uploads/2021/05/Swetha-1-300x300.jpg' },
                     { id: 8, pid: 7, name: 'Farheen', title: 'HR Specialist', img: 'https://techprojects.com/wp-content/uploads/2021/09/Farheen-300x300.jpg' }
                 ]} />
             </div>
    </>
  )
}

export default Orgstructurep
