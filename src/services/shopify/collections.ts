import { shopifyUrls } from "./urls"
import { env } from "app/config/env"

export const getCollections = async () => {
    try {
        const response = await fetch(shopifyUrls.collections.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        })

        const { smart_collections } = await response.json()

        const tranformedCollections = smart_collections.map((collection: any) => {
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle
            }
        })

        return tranformedCollections
    } catch (error) {
        console.log(error)
    }
}

export const getCollectionProducts = async (collection_id: string) => {
    try {
        console.log(collection_id)
        const response = await fetch(shopifyUrls.collections.products(collection_id), {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        })

        const { products } = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}