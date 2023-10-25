import icono from '../asset/icon-o.svg'
import iconoOutline from '../asset/icon-o-outline.svg'

export default function O({variant = 'normal',className}: {variant?: "normal" | "outline",className?:string}) {
    return (
       <img className={className} src={variant === 'normal' ? icono : iconoOutline}/>
    )
}