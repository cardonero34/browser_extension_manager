import './App.css'
import { User } from './components/User'
import { User2 } from './components/User2'
import { User3 } from './components/User3'

export const App = () => {

  return (
    <>
      <div className='cont1'>
        <User2 />

        <User3 />
      </div>
      <div className='cont2'>
        <User icon="/logo-devlens.svg" name="DevLens" description="Quickly inspect page layouts and visualize element boundaries." />
        <User icon="/logo-style-spy.svg" name="StyleSpy" description="Instantly analyze and copy CSS from any webpage element." />
        <User icon="/logo-speed-boost.svg" name="SpeedBoost" description="Optimizes browser resource usage to accelerate page loading." />
        <User icon="/logo-json-wizard.svg" name="JSONWizard" description="Formats, validates, and prettifies JSON responses in-browser." />
        <User icon="/logo-tab-master-pro.svg" name="TabMaster Pro" description="Organizes browser tabs into groups and sessions." />
        <User icon="/logo-viewport-buddy.svg" name="ViewportBuddy" description="Simulates various screen resolutions directly within the browser." />
        <User icon="/logo-markup-notes.svg" name="Markup Notes" description="Enables annotation and notes directly onto webpages for collaborative debugging." />
        <User icon="/logo-grid-guides.svg" name="GridGuides" description="Overlay customizable grids and alignment guides on any webpage." />
        <User icon="/logo-palette-picker.svg" name="Palette Picker" description="Instantly extracts color palettes from any webpage." />
        <User icon="/logo-link-checker.svg" name="LinkChecker" description="Scans and highlights broken links on any page." />
        <User icon="/logo-dom-snapshot.svg" name="DOM Snapshot" description="Capture and export DOM structures quickly." />
        <User icon="/logo-console-plus.svg" name="ConsolePlus" description="Enhanced developer console with advanced filtering and logging." />
      </div>
    </>
  )
}


