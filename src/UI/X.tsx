import iconx from '../asset/icon-x.svg'
import iconxOutline from '../asset/icon-x-outline.svg'

export default function X({variant = 'normal',className}: {variant?: "normal" | "outline",className?:string}) {
    return (
       <img className={className} src={variant === 'normal' ? iconx : iconxOutline}/>
    )
}