workspace "Simples MCD" {
    model {
        usuario = person "Usuário final" "Visitante do site."

        site = softwareSystem "Web Site" "Sistemas contendo as imagens diponíveis."

        slack = softwareSystem "Slack" "Sistema de comunicação com o admin do site." {
            tags "External"
        }

        usuario -> site "Solicita imagens via posts com HTTPS"
        site -> usuario "Retorna imagem desejada"

        site -> slack "Envia uma msg se a imagem tiver mais de 200kb."
    }

    views {
        systemContext site "Context" "" {
            include *
            autoLayout
        }

        styles {
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Person" {
                shape person
                background #08427b
                color #ffffff
            }
            element "External" {
                background #999999
                color #ffffff
            }
            relationship "Relationship" {
                dashed false
            }
            relationship "Dashed" {
                dashed true
            }
        }
    }
}