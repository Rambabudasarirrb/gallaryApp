import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickImage = () => {
    clickImage(id)
  }

  return (
    <li className="container">
      <button type="button" className="thumbnail-Button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
