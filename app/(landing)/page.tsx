// import { } from "/lib/db/landing.ts"
// import {getTitle } from '@/lib/db/landing'
"use client"
import Image from "next/image";
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import Lango from "@/components/lang"

export default function Test() {

    const [headerTitle, setHeaderTitle] = useState<{ title: string, value: string }[]>([]);

    const tt = (title: string) => {
        try {
            return headerTitle.filter((item: { title: string, value: string }) => item.title === title)[0].value
        } catch (e) {
            return ""
        }

    }

    useEffect(() => {
        const headerHandler = async () => {
            try {
                const response = await fetch(`/api/landing`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                if (response.ok) {
                    const data: any = await response.json();
                    // setHeaderTitle(JSON.stringify(data))
                    if (data.value) {
                        setHeaderTitle(data.value)
                    }
                }
            } catch (e) {
                // setError(e)
                console.log(e);
            }
        }

        headerHandler()
    }, [])
    const {t} =useTranslation()

    return (
        <div>Test {t('auth.welcome')}   <Lango />

            {
                tt('header_url') !== "" && <Image src={tt('header_url')} width={200} height={200} alt="map" />
            }

            <div>
                {
                    headerTitle.map((item, index) => (

                        <div key={index}>{item.value}</div>

                    )

                    )
                }
            </div>
        </div>
    )
}