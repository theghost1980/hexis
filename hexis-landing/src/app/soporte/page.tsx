"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HelpCircle, Mail, Shield } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function SoportePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main
        className="flex-1 pt-16"
        onContextMenu={(e) => e.preventDefault()}
        style={{ userSelect: "none", WebkitUserSelect: "none" }}
      >
        <section className="bg-[#F8F9FA] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-[#2563EB]" />
              <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#2563EB]">
                SOPORTE
              </span>
            </div>

            <h1 className="text-center text-[1.75rem] font-bold text-[#0B1E33] sm:text-[2.5rem]">
              Centro de Ayuda Hexis
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#4A5568]">
              Resuelve cualquier inconveniente con tu compra o lectura del Método Hexis.
            </p>

            <div className="mt-2 rounded-lg border border-[#2563EB]/20 bg-[#F0F4FF] p-4 text-center text-sm text-[#4A5568]">
              <Shield className="mr-1 inline-block h-4 w-4 text-[#2563EB]" />
              Este contenido es para uso personal. Gracias por respetar el trabajo del autor.
            </div>

            <div className="mt-10 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                <h2 className="mb-4 text-lg font-semibold text-[#0B1E33]">
                  Problemas con la compra en Gumroad
                </h2>

                <AccordionItem value="no-link">
                  <AccordionTrigger>
                    No recibí el enlace de descarga
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Si compraste el Método Hexis en Gumroad y no ves el enlace de descarga, sigue estos pasos:
                    </p>
                    <ol className="ml-5 mt-2 list-decimal space-y-1">
                      <li>Revisa tu bandeja de spam / correo no deseado.</li>
                      <li>Busca un correo de <strong>Gumroad</strong> con el asunto &quot;You can download &quot;Método Hexis&quot;&quot;.</li>
                      <li>Si no aparece, inicia sesión en{" "}
                        <a href="https://gumroad.com/library" target="_blank" rel="noopener noreferrer">
                          gumroad.com/library
                        </a>{" "}
                        con el correo que usaste para comprar.</li>
                      <li>Allí estarán todos tus productos adquiridos, incluido el PDF.</li>
                    </ol>
                    <p className="mt-2">
                      Si aún así no lo encuentras, escríbeme a{" "}
                      <a href="mailto:saturno@hexis.fyi">saturno@hexis.fyi</a> con tu comprobante de pago.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-failed">
                  <AccordionTrigger>
                    El pago fue rechazado
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Gumroad acepta la mayoría de tarjetas de crédito/débito y PayPal. Si tu pago fue rechazado:</p>
                    <ul className="ml-5 mt-2 list-disc space-y-1">
                      <li>Verifica que los datos de tu tarjeta sean correctos.</li>
                      <li>Prueba con otro método de pago (PayPal, otra tarjeta).</li>
                      <li>Algunos bancos bloquean compras internacionales; activa las compras en el extranjero desde tu banca online.</li>
                      <li>Si el problema persiste, escríbeme a{" "}
                        <a href="mailto:saturno@hexis.fyi">saturno@hexis.fyi</a> y te ayudaré personalmente.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="refund">
                  <AccordionTrigger>
                    Quiero un reembolso
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Ofrezco reembolsos completos dentro de los primeros <strong>7 días</strong> posteriores a la compra, sin preguntas.
                    </p>
                    <p className="mt-2">
                      Para solicitar un reembolso, escríbeme a{" "}
                      <a href="mailto:saturno@hexis.fyi">saturno@hexis.fyi</a>{" "}
                      con el asunto &quot;Reembolso Método Hexis&quot; y adjunta el comprobante de pago. Procesaré el reembolso en menos de 48 horas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <hr className="my-8 border-[#E2E8F0]" />

              <Accordion type="single" collapsible className="w-full">
                <h2 className="mb-4 text-lg font-semibold text-[#0B1E33]">
                  Problemas al abrir el PDF
                </h2>

                <AccordionItem value="android-viewer">
                  <AccordionTrigger>
                    El PDF se ve con fondo negro y logo, pero sin texto (Android)
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Este es el problema más común. Algunos visores de PDF integrados en Android (especialmente los navegadores) no renderizan correctamente las fuentes y fondos del Método Hexis.
                    </p>
                    <div className="mt-3 rounded-lg border border-[#F59E0B]/20 bg-[#FFF8E7] p-4">
                      <p className="font-semibold text-[#0B1E33]">Solución recomendada:</p>
                      <ol className="ml-5 mt-2 list-decimal space-y-1">
                        <li>Descarga e instala{" "}
                          <strong>Adobe Acrobat Reader</strong> desde{" "}
                          <a href="https://play.google.com/store/apps/details?id=com.adobe.reader" target="_blank" rel="noopener noreferrer">
                            Google Play Store
                          </a>.
                        </li>
                        <li>Abre el PDF directamente con Acrobat Reader en vez del visor del navegador.</li>
                        <li>Si el PDF se descargó, presiónalo y selecciona &quot;Abrir con…&quot; → Adobe Acrobat.</li>
                      </ol>
                    </div>
                    <p className="mt-3">
                      Los visores integrados de algunos dispositivos no renderizan correctamente fuentes y fondos complejos. Recomendamos abrir el PDF siempre con Acrobat Reader.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="iphone-error">
                  <AccordionTrigger>
                    Error al descargar en iPhone / iPad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Si tienes problemas para descargar el PDF en un dispositivo Apple:</p>
                    <ul className="ml-5 mt-2 list-disc space-y-1">
                      <li>Asegúrate de tener conexión a internet estable.</li>
                      <li>Prueba descargar desde Safari (el navegador nativo de iOS).</li>
                      <li>Si el PDF se abre pero no se guarda, usa el botón &quot;Compartir&quot; → &quot;Guardar en Archivos&quot;.</li>
                      <li>También puedes abrirlo directamente en Apple Books o en la app Archivos.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="file-size">
                  <AccordionTrigger>
                    El archivo pesa mucho y no se descarga
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      El Método Hexis incluye gráficos e imágenes en alta calidad, por lo que el archivo puede pesar ~15-30 MB.
                    </p>
                    <ul className="ml-5 mt-2 list-disc space-y-1">
                      <li>Asegúrate de tener suficiente espacio en tu dispositivo.</li>
                      <li>Usa una conexión WiFi en lugar de datos móviles.</li>
                      <li>Si el navegador cancela la descarga, prueba con otro navegador (Chrome, Firefox, Edge).</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <hr className="my-8 border-[#E2E8F0]" />

              <Accordion type="single" collapsible className="w-full">
                <h2 className="mb-4 text-lg font-semibold text-[#0B1E33]">
                  Problemas con el contenido
                </h2>

                <AccordionItem value="broken-links">
                  <AccordionTrigger>
                    Los enlaces dentro del PDF no funcionan
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Los enlaces del PDF requieren conexión a internet. Si no funcionan:
                    </p>
                    <ul className="ml-5 mt-2 list-disc space-y-1">
                      <li>Asegúrate de estar conectado a internet.</li>
                      <li>Abre el PDF con Adobe Acrobat Reader (los visores integrados a veces no soportan enlaces).</li>
                      <li>Si el enlace sigue sin funcionar, copia la URL manualmente y pégala en tu navegador.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="whatsapp-group">
                  <AccordionTrigger>
                    No encuentro el grupo de WhatsApp de mentoría
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      El enlace al grupo de WhatsApp se encuentra en la última página del PDF, dentro de la sección &quot;Próximos pasos&quot;. Si el enlace expiró o no funciona:
                    </p>
                    <p className="mt-2">
                      Escríbeme a{" "}
                      <a href="mailto:saturno@hexis.fyi">saturno@hexis.fyi</a>{" "}
                      con el asunto &quot;Acceso al grupo Hexis&quot; y te enviaré un enlace actualizado.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="additional-resources">
                  <AccordionTrigger>
                    Cómo acceder a los recursos adicionales
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      El Método Hexis incluye plantillas, prompts y recursos adicionales que se mencionan a lo largo del PDF.
                    </p>
                    <ul className="ml-5 mt-2 list-disc space-y-1">
                      <li>Los enlaces de descarga directa están etiquetados en azul dentro del PDF.</li>
                      <li>Algunos recursos están alojados en GitHub — asegúrate de tener una cuenta gratuita.</li>
                      <li>Si algún enlace está caído, avísame a{" "}
                        <a href="mailto:saturno@hexis.fyi">saturno@hexis.fyi</a> y lo repararé.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-10 rounded-xl border border-[#2563EB]/20 bg-[#F0F4FF] p-8 text-center">
              <Mail className="mx-auto mb-3 h-8 w-8 text-[#2563EB]" />
              <h3 className="text-xl font-semibold text-[#0B1E33]">
                ¿No encuentras solución?
              </h3>
              <p className="mt-2 text-[#4A5568]">
                Escríbeme a{" "}
                <a
                  href="mailto:saturno@hexis.fyi"
                  className="font-semibold text-[#2563EB] hover:underline"
                >
                  saturno@hexis.fyi
                </a>{" "}
                y te responderé en menos de 24 horas.
              </p>
            </div>

            <p className="mt-6 text-center text-xs text-[#94A3B8]">
              Este contenido es solo para uso personal. No está permitida su redistribución.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
