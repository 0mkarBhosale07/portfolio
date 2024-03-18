export {default} from "next-auth/middleware"

export const middleware  = {
    matcher : ["/dashboard", "/dashboard/:path*"]
    // matcher : [""]
}