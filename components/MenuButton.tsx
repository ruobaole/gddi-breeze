import { useCallback, useMemo, useState } from 'react'
import { IconContext } from 'react-icons'
import { GoThreeBars, GoX } from 'react-icons/go'

export interface MenuButtonProps {
  closeTWClassname?: string
  hamburgerTWClassname?: string
  bgClassname?: string
  renderContent: () => JSX.Element
}

export const MenuButton = ({
  closeTWClassname,
  hamburgerTWClassname,
  bgClassname,
  renderContent,
}: MenuButtonProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const handleBtnClick = useCallback(() => {
    setOpen(true)
  }, [])

  const handleCloseClick = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const MenuContent = useMemo(() => {
    return (
      <div
        className={`absolute top-0 left-0 w-screen h-screen ${
          bgClassname && bgClassname
        }`}
      >
        <IconContext.Provider value={{}}>
          <button
            className={`z-10 absolute top-2 right-2 ${
              closeTWClassname && closeTWClassname
            }`}
            onClick={handleCloseClick}
          >
            <GoX />
          </button>
        </IconContext.Provider>
        <nav className="block fixed top-0 left-0 bottom-0 right-0">
          {renderContent()}
        </nav>
      </div>
    )
  }, [bgClassname, closeTWClassname, renderContent, handleCloseClick])

  return (
    <>
      <IconContext.Provider value={{}}>
        <div
          className={`cursor-pointer ${
            hamburgerTWClassname && hamburgerTWClassname
          }`}
          role="button"
          tabIndex={1}
          onClick={handleBtnClick}
        >
          <GoThreeBars />
        </div>
      </IconContext.Provider>
      {open && MenuContent}
    </>
  )
}
