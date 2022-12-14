import { useState } from 'react';
import { Box, FormControl, FormHelperText, Grid } from '@mui/material';
import Input from '../../components/Input';
import Heading from '../../components/Heading';
import CodeBlock from '../../components/CodeBlock';
import Note from '../../components/Note';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import scss from './CustomCodeSnippets.module.scss';
import LaunchIcon from '@mui/icons-material/Launch';


const CustomCodeSnippets = () => {
  const [ organizationID, setOrganizationID ] = useState('');
  const maxOrgIDLength = 8;
  const organizationIDLengthChecker = organizationID.length > maxOrgIDLength;

  return (
    <Grid className={scss.customCodeSnippets} item>
        <Box component="form">
          <Heading variant="h4">To create custom code snippets, fill in your organisation ID:</Heading>
          <FormControl variant="standard" fullWidth>
            <Input 
              style={{marginBottom: !organizationIDLengthChecker ? '30px' : ''}}
              error={organizationIDLengthChecker} 
              aria-describedby="organizationID-helper-text"
              type={'number'}
              id="organizationID" 
              label="Your organisation ID" 
              onChange={(e) => setOrganizationID(e.currentTarget.value)} 
              inputProps={{maxLength: 10}} 
              multiline
            />
            <FormHelperText
              style={{marginBottom: organizationIDLengthChecker ? '30px' : ''}}
              error={organizationIDLengthChecker} 
              id="organizationID-helper-text" >
                {organizationIDLengthChecker ?  `Max Organization ID length is ${maxOrgIDLength}` : ''}
              </FormHelperText >
          </FormControl>
          <Heading variant="h4">Run the following gcloud commands in sequence:</Heading>
          <CodeBlock>
            Donec at ante sed orci euismod venenatis iaculis at sapien. {organizationID ? (<span style={{color: "red"}}>{organizationID}</span>) : "<organizationID>"} Ut id nisl a neque facilisis tempus. Donec et risus dui. Aliquam fringilla luctus velit quis dapibus.
          </CodeBlock>
        </Box>
        <Box className={scss.helpWrapper}>
        <Note className={scss.helpNote}>
            <b>Need Help?</b>
            <br />
            <p>Duis lacus erat, tincidunt a quam eu, feugiat feugiat felis. Duis hendrerit a eros at pulvinar. Quisque a congue enim. Proin at egestas eros. Duis venenatis commodo tempus.</p>
            <ul className={scss.helpfulLinks}>
              <li className={scss.helpfulItem}><LaunchIcon className={scss.icon}/>
                <a className={scss.link} href="#learnWhereToFindOrganizationID">Learn where to find organization ID</a>
              </li>
              <li className={scss.helpfulItem}><ContentCopyIcon className={scss.icon} />
                <a className={scss.link} href="#CopyALinkToThisPage">Copy a link to this page</a>
              </li>
            </ul>
          </Note>
        </Box>
      </Grid>
  )
}

export default CustomCodeSnippets;