import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
    <div>
      <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
    </div>
    <div className={p.descriptionBlock}>
      avatar
      <img src='https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg' />
    </div>
  </div>
    
  )
}

export default ProfileInfo;