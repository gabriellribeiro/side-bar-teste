import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { toggleSidebar } = useProSidebar();

  return (
    <div className={styles.divMain}>
      <Sidebar breakPoint="always" 
      rootStyles={{
        background:
          'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
      }}
      >
        <h1 className={styles.pTextExemplo}>Texto ou Logo</h1>
        <Menu transitionDuration={1000}>
          <MenuItem > Documentation</MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Emails">
            <MenuItem> New</MenuItem>
            <MenuItem> last</MenuItem>
            <MenuItem> Spam</MenuItem>
          </SubMenu>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 , justifyContent:'center'}}>
        <div>
          <button className={styles.sbbutton} onClick={() => toggleSidebar()}>
            Menu
          </button>
        </div>
        <div className={styles.PowerBI}>
        <iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWE4ZTA0YjYtYWRkMi00OTU4LTkwY2ItZmVhZGJjM2M5NTdmIiwidCI6IjZiNmU0ZTdiLWM5YmQtNDQwMC05NTE1LTcyNWIzZDVmMWY0MyJ9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
      </main>
    </div>
  );
}
