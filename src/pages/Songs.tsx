import SingleItem from '../components/SingleItem'
import { songsArray } from '../server/songs'

const Songs = () => {
  return (
    <div>
      <SingleItem items={songsArray} maxItemsToShow={songsArray.length} path="/song" idPath="/songs" />
    </div>
  )
}

export default Songs
