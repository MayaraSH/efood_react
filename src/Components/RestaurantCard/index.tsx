import { Link } from 'react-router-dom'
import {
  Card,
  CardImage,
  Tags,
  Tag,
  CardContent,
  CardHeader,
  RestaurantName,
  Rating,
  Description,
  Button
} from './styles'

interface RestaurantCardProps {
  id: number
  name: string
  rating: number
  description: string
  image: string
  tags: string[]
}

const RestaurantCard = ({
  id,
  name,
  rating,
  description,
  image,
  tags
}: RestaurantCardProps) => {
  return (
    <Card>
      <CardImage>
        <img src={image} alt={name} />
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </CardImage>
      <CardContent>
        <CardHeader>
          <RestaurantName>{name}</RestaurantName>
          <Rating>
            {rating} <img src="/images/estrela.png" alt="Estrelinha" />
          </Rating>
        </CardHeader>
        <Description>{description}</Description>
        <Link to={`/restaurant/${id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard
