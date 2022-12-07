import { Work_Sans } from '@next/font/google'

export const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
})

export default {
  fontFamily: workSans.style.fontFamily,
  h1: {
    fontSize: '50px'
  }
}
