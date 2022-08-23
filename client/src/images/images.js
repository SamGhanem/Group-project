// import * as pictures from './assets'
import beach from '../images/assets/beach.JPG'
import lake from '../images/assets/lake.JPG'
import mountain from '../images/assets/mountain.JPG'

function buildImageObjects(images) {
    //Images are timed and rotated
    const name = beach.split('/')[3].split('.')[0]
    return images.map((image, index) => {
        return {
            id: index,
            src: image,
            alt: name
        }
    })
}

const imgObj = buildImageObjects([beach, lake, mountain])
console.log(imgObj)


export default imgObj;