
import { CustomTemplateProps } from './types'
// import { LanguageSelect } from './components/LanguageSelect'`

const Template = (props: CustomTemplateProps<"login.ftl">) => {
  // const { children, kcContext, i18n } = props
  const { children, } = props
  // const { realm } = kcContext
  // const { internationalizationEnabled } = realm
  // const { enabledLanguages } = i18n

  return (
    // <div className=" bg-gray-100 flex items-center justify-center h-screen w-screen">
    // <div className="bg-login-bg flex items-center justify-center h-screen w-screen bg-repeat bg-[length:200px] bg-opacity-[200px] backdrop-blur-xl">
    //   <div className="max-w">
    //     {/* <div className="bg-white rounded-lg shadow-lg p-6"> */}
    //       {children}
    //     {/* </div> */}
    //     {/* <div className="flex items-center mt-[1%]">
    //       <span className="text-xs text-gray-600">{realm.displayName}</span>
    //       {!!enabledLanguages?.length && internationalizationEnabled && (
    //         <div className="ml-auto">
    //           <LanguageSelect i18n={i18n} />
    //         </div>
    //       )}
    //     </div> */}
    //   </div>
    // </div>
 
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
    {/* <div className="absolute inset-0 bg-login-bg bg-repeat bg-[length:200px] opacity-40 -z-10"></div> */}
     <div className="absolute inset-0 bg-gray-200 bg-[length:200px] opacity-40 -z-10"></div>
    {children}
  </div>
  )
}

export { Template }