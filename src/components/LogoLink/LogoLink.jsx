import classNames from 'classnames'
import React from 'react'
import Logo from '../../components-svg/Logo'
import { PATHS } from '../../routes/paths'
import { CustomLink } from '../CustomLink/CustomLink'
import styles from './LogoLink.module.css'

const LogoLink = ({ className }) => {
    return (
        <CustomLink className={ classNames(className, styles.logoLink, 'linkAnimation') }
            destination={ PATHS.MAIN }
        >
            <Logo className={ styles.logoIcon } />
        </CustomLink>
    )
}
export default LogoLink
