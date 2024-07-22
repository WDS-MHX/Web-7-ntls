import styles from './banner_logo.module.css'

function banner_logo(){
    return(
        <>
            <div className={styles['banner']}>
                <div className={styles['logo']}>
                    <img src="src\components\img\banner\full-banner.png"/>      
                </div>                      
            </div>
        </>
    )
}

export default banner_logo;