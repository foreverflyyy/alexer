import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import Image from "next/image"
import styles from './styles.module.scss';

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(({ className, ...props }, ref) => (
  <button className={clsx('btn-reset', styles.btn, className)} ref={ref} {...props}>
    <Image src={"/icons/common/chevron.svg"} alt="chevron" width={30} height={30}/>
  </button>
));