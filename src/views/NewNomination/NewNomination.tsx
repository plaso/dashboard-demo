import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Button from '../../components/Button'
import { newNomination, NewNominationBody } from '../../http/newNomination'
import { IAuthContext, useAuthContext } from '../../contexts/AuthContext'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  description: Yup.string().min(10, 'We will need a longer description').max(500, 'The description is too long').required('Required'),
  involvement: Yup.number().min(0, 'Out of range').max(10, 'Out of range').required('Required'),
  talent: Yup.number().min(0, 'Out of range').max(10, 'Out of range').required('Required')
})

interface FormValues {
  email: string
  description: string
  involvement: number
  talent: number
}

const initialValues: FormValues = {
  email: '',
  description: '',
  involvement: 5,
  talent: 5
}

function NewNomination() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { user } = useAuthContext() as IAuthContext
  
  const mutation = useMutation((body: NewNominationBody) => newNomination(body, user.id), {
    onSuccess: async () => {
      queryClient.invalidateQueries(['nominations'])

      navigate('/')
    }
  })

  const formik = useFormik({
    initialValues,
    onSubmit: async ({ email, description, involvement, talent }) => {
      const requestBody: NewNominationBody = {
        email,
        description,
        score: {
          involvement,
          talent
        }
      }

      mutation.mutate(requestBody)
    },
    validationSchema
  })

  return (
    <div>
      <h1>New nomination</h1>

      <form onSubmit={formik.handleSubmit} className="min-w-full bg-white shadow-md p-6 rounded-md">
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
        />

        <Textarea
          id="description"
          name="description"
          label="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.touched.description && formik.errors.description}
        />

        <Input
          id="involvement"
          name="involvement"
          label="Involvement"
          type="range"
          onChange={formik.handleChange}
          value={formik.values.involvement}
          error={formik.touched.involvement && formik.errors.involvement}
        />

        <Input
          id="talent"
          name="talent"
          label="Talent"
          type="range"
          onChange={formik.handleChange}
          value={formik.values.talent}
          error={formik.touched.talent && formik.errors.talent}
        />

        <Button type="submit">{formik.isSubmitting || mutation.isLoading ? 'Sending...' : 'Send'}</Button>
      </form>
    </div>
  )
}

export default NewNomination