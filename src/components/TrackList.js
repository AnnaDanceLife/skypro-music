import TrackListItems from './TrackListItems'
import Filter from './Filter'
import Search from './Search'

function TrackList({loading}) {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg
              className="playlist-title__svg"
              alt="time"
            >
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <TrackListItems loading={loading} />
        </div>
      </div>
    </div>
  )
}
export default TrackList
