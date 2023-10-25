import iconx from '../asset/icon-x.svg'
import iconxOutline from '../asset/icon-x-outline.svg'

export default function X({variant = 'normal'}: {variant?: "normal" | "outline"}) {
    return (
       <img  src={variant === 'normal' ? iconx : iconxOutline}/>
    )
}