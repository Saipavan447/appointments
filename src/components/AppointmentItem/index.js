import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, tile, date, isStarred} = appointmentDetails

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-list">
      <div className="appointment-container">
        <p className="heading">{tile}</p>
        <button
          type="button"
          testid="star"
          className="favorite-icon-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
