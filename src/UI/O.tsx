import icono from '../asset/icon-o.svg'
import iconoOutline from '../asset/icon-o-outline.svg'

export default function O({variant = 'normal'}: {variant?: "normal" | "outline"}) {
    return (
       <img  src={variant === 'normal' ? icono : iconoOutline}/>
    )
}